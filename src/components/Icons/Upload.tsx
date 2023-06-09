const UploadIcon = ({ size }: { size?: number }) => {
  return (
    <svg height={size} width={size} style={{ fill: 'rgb(102, 120, 138)' }} viewBox='0 0 16 16'>
      <path
        d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z'
        fill-rule='evenodd'
      />
    </svg>
  );
};

export default UploadIcon;
