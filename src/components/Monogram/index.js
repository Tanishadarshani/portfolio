import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="40"
      height="45"
      viewBox="0 0 40 45"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M0.5 1.36442C0.5 1.1243 0.572035 0.932209 0.716105 0.788141C0.908198 0.596047 1.1243 0.5 1.36442 0.5H32.6276C33.5881 0.5 34.3805 0.884186 35.0048 1.65256L40.3354 8.63995C40.5274 8.88007 40.5515 9.12018 40.4074 9.3603C40.3113 9.55239 40.1192 9.64844 39.8311 9.64844H23.7673V50.0601C23.7673 50.6363 23.4792 50.9245 22.9029 50.9245H15.4833C14.907 50.9245 14.6189 50.6363 14.6189 50.0601V9.64844H1.36442C1.1243 9.64844 0.908198 9.57641 0.716105 9.43234C0.572035 9.24025 0.5 9.02414 0.5 8.78402V1.36442Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
