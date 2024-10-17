import { FC } from 'react';
type Props = {
  icon: string;
};
const SocialButton: FC<Props> = ({ icon }) => {
  const style = {
    borderRadius: '100px',
    // padding: '14px',
    width: '48px',
    height: '48px',
    background: 'var(--dark-12)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };
  return (
    <a style={style}>
      <img
        style={{
          width: '20px',
          height: '20px',
        }}
        src={icon}
        alt="socialButton"
      />
    </a>
  );
};

export default SocialButton;
