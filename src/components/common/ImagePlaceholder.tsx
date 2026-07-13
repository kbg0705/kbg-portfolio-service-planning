import { Link } from 'react-router-dom';
import type { ProjectImage } from '../../types/project';

export function resolveAssetPath(src: string) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${src.replace(/^\/+/, '')}`;
}

export function ImagePlaceholder({ image, onOpen, to }: { image: ProjectImage; onOpen?: () => void; to?: string }) {
  if (!image.src) return null;

  const content = (
    <>
      <img src={resolveAssetPath(image.src)} alt={image.alt} loading="lazy" />
      <em>{image.caption}</em>
    </>
  );

  if (to) {
    return <Link className="image-placeholder has-image" to={to}>{content}</Link>;
  }

  if (onOpen) {
    return <button type="button" className="image-placeholder has-image" onClick={onOpen}>{content}</button>;
  }

  return <div className="image-placeholder has-image">{content}</div>;
}
