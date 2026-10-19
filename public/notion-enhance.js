(() => {
  // Keep text in the 60% column and move standalone media figures into the
  // 40% media column.
  document.querySelectorAll('.column-list.project-split').forEach((split) => {
    const text = split.querySelector('.project-text');
    const media = split.querySelector('.project-media');
    if (!text || !media) return;

    // Move the project heading and any section-level intro copy into the text
    // column, so the media column starts at the heading instead of below it.
    const preceding = [];
    let node = split.previousElementSibling;
    while (node && node.tagName !== 'HR') {
      preceding.unshift(node);
      node = node.previousElementSibling;
    }
    if (preceding.length > 0) text.prepend(...preceding);

    text.querySelectorAll('figure').forEach((figure) => media.appendChild(figure));
  });

  const isYouTube = (url) => {
    try {
      const parsed = new URL(url, window.location.href);
      return parsed.hostname === 'youtu.be' || parsed.hostname.endsWith('youtube.com');
    } catch {
      return false;
    }
  };

  const getYouTubeId = (url) => {
    try {
      const parsed = new URL(url, window.location.href);

      if (parsed.hostname === 'youtu.be') {
        return parsed.pathname.split('/').filter(Boolean)[0] || null;
      }

      if (parsed.hostname.endsWith('youtube.com')) {
        if (parsed.pathname.startsWith('/embed/') || parsed.pathname.startsWith('/shorts/')) {
          return parsed.pathname.split('/')[2] || null;
        }

        return parsed.searchParams.get('v');
      }
    } catch {
      return null;
    }

    return null;
  };

  // This video does not have a maxres thumbnail.
  const noMaxres = new Set(['hhAXSjKvBms']);

  const sources = document.querySelectorAll('.source a[href]');

  sources.forEach((link) => {
    const source = link.closest('.source');
    if (!source) return;

    const figure = source.closest('figure');
    const caption = figure?.querySelector('figcaption')?.textContent?.trim();

    if (isYouTube(link.href)) {
      const videoId = getYouTubeId(link.href);
      if (!videoId) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'youtube-embed';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'youtube-facade';
      button.setAttribute('aria-label', `Play video: ${caption || 'YouTube video'}`);

      const thumbnail = document.createElement('img');
      const thumbnailName = noMaxres.has(videoId) ? 'hqdefault' : 'maxresdefault';
      thumbnail.src = `https://i.ytimg.com/vi/${videoId}/${thumbnailName}.jpg`;
      thumbnail.alt = '';
      thumbnail.loading = 'lazy';
      thumbnail.addEventListener(
        'error',
        () => {
          thumbnail.src = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
        },
        { once: true },
      );

      const play = document.createElement('span');
      play.className = 'youtube-play';
      const glyph = document.createElement('span');
      glyph.textContent = '▶';
      play.appendChild(glyph);

      button.append(thumbnail, play);

      button.addEventListener(
        'click',
        () => {
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
          iframe.title = caption || 'YouTube video';
          iframe.referrerPolicy = 'strict-origin-when-cross-origin';
          iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          iframe.allowFullscreen = true;
          wrapper.replaceChildren(iframe);
        },
        { once: true },
      );

      wrapper.appendChild(button);
      source.replaceWith(wrapper);
      return;
    }

    let videoUrl;
    try {
      videoUrl = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    if (!/\.(mp4|webm|mov)$/i.test(videoUrl.pathname)) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'local-video';

    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.poster = videoUrl.pathname.replace(/\.(mp4|webm|mov)$/i, '-poster.jpg');
    video.setAttribute('aria-label', caption || 'Gameplay video');

    const sourceEl = document.createElement('source');
    sourceEl.src = videoUrl.pathname;
    sourceEl.type = videoUrl.pathname.endsWith('.webm') ? 'video/webm' : 'video/mp4';
    video.appendChild(sourceEl);
    video.appendChild(document.createTextNode('Your browser does not support video.'));

    wrapper.appendChild(video);
    source.replaceWith(wrapper);
  });

  // Build a two-column media grid in the 40% column and, on desktop, move
  // just enough images under the text to balance the two column heights.
  document.querySelectorAll('.column-list.project-split').forEach((split) => {
    const text = split.querySelector('.project-text');
    const media = split.querySelector('.project-media');
    if (!text || !media) return;

    const figures = Array.from(media.querySelectorAll('figure'));
    const videoFigures = figures.filter(
      (figure) => figure.querySelector('.youtube-embed, .source') || !figure.querySelector('img'),
    );
    const imageFigures = figures.filter(
      (figure) => figure.querySelector('img') && !figure.querySelector('.youtube-embed, .source'),
    );

    // Rebuild the media column in a predictable order: video/source first,
    // then the two-column image grid.
    media.replaceChildren(...videoFigures);

    const mediaGrid = document.createElement('div');
    mediaGrid.className = 'media-grid';
    media.appendChild(mediaGrid);

    const leftMedia = document.createElement('div');
    leftMedia.className = 'left-media';
    text.appendChild(leftMedia);

    const desktop = window.matchMedia('(min-width: 1001px)').matches;

    if (!desktop || imageFigures.length === 0) {
      mediaGrid.replaceChildren(...imageFigures);
      split.dataset.leftImages = '0';
      split.dataset.rightImages = String(imageFigures.length);
      return;
    }

    const baseTextHeight = text.offsetHeight;

    const measure = (count) => {
      leftMedia.replaceChildren(...imageFigures.slice(0, count));
      mediaGrid.replaceChildren(...imageFigures.slice(count));

      const leftHeight = count > 0 ? leftMedia.offsetHeight + 24 : 0;
      const rightHeight = media.offsetHeight;
      return Math.abs(baseTextHeight + leftHeight - rightHeight);
    };

    let bestCount = 0;
    let bestDiff = Infinity;

    for (let count = 0; count <= imageFigures.length; count++) {
      const diff = measure(count);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestCount = count;
      }
    }

    measure(bestCount);
    split.dataset.leftImages = String(bestCount);
    split.dataset.rightImages = String(imageFigures.length - bestCount);
  });
})();
