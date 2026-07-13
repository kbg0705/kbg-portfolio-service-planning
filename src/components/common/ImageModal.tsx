import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ProjectImage } from '../../types/project';
import { resolveAssetPath } from './ImagePlaceholder';

export function ImageModal({
  images,
  index,
  onClose,
  onMove,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onMove: (nextIndex: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const image = images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onMove((index - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') onMove((index + 1) % images.length);
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button,[href],[tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, images.length, index, onClose, onMove]);

  return (
    <div className="image-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="image-modal__dialog" role="dialog" aria-modal="true" aria-label={image.caption} tabIndex={-1} ref={dialogRef}>
        <button className="icon-button image-modal__close" type="button" onClick={onClose} aria-label="이미지 닫기"><X size={18} /></button>
        <div className="image-modal__image">
          <img src={resolveAssetPath(image.src!)} alt={image.alt} />
        </div>
        <div className="image-modal__navigation">
          <button className="secondary-action" type="button" onClick={() => onMove((index - 1 + images.length) % images.length)}><ChevronLeft size={17} /> 이전</button>
          <span>{index + 1} / {images.length}</span>
          <button className="secondary-action" type="button" onClick={() => onMove((index + 1) % images.length)}>다음 <ChevronRight size={17} /></button>
        </div>
      </div>
    </div>
  );
}
