import styles from './style.module.scss';

interface DirectionItemProps {
  label: string;
  onClickButton: () => void;
  isActive: boolean;
}

export const DirectionItem: React.FC<DirectionItemProps> = ({
  label,
  onClickButton,
  isActive,
}) => {
  return (
    <li className={styles['direction']}>
      <button
        title={label}
        className={
          isActive
            ? [styles['direction__btn'], styles['direction__btn--active']].join(
                ' ',
              )
            : styles['direction__btn']
        }
        onClick={onClickButton}
      >
        {label}
      </button>
    </li>
  );
};
