export const SITE_NAME = 'Arshnoor Singh';
export const SITE_ROLE = 'Game Designer & Developer';
export const EMAIL = 'arshnoor88@gmail.com';

const rawBase = import.meta.env.BASE_URL;

export const BASE = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function withBase(path = '') {
  return `${BASE}${path.replace(/^\//, '')}`;
}

export function youtubeUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}
