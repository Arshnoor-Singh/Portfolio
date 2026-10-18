(() => {
  // Keep text in the 60% column and move standalone media figures into the
  // 40% media column.
  document.querySelectorAll('.column-list.project-split').forEach((split) => {
    const text = split.querySelector('.project-text');
    const media = split.querySelector('.project-media');
    if (!text || !media) return;

    Array.from(text.children).forEach((child) => {
      if (child.matches('figure')) media.appendChild(child);
    });
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
    if (!isYouTube(link.href)) return;

    const videoId = getYouTubeId(link.href);
    if (!videoId) return;

    const source = link.closest('.source');
    if (!source) return;

    const figure = source.closest('figure');
    const caption = figure?.querySelector('figcaption')?.textContent?.trim();

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
  });
})();
