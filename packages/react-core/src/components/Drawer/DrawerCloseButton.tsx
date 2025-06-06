import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export interface DrawerCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer close button outer <div>. */
  className?: string;
  /** A callback for when the close button is clicked  */
  onClose?: () => void;
  /** Accessible label for the drawer close button */
  'aria-label'?: string;
}

export const DrawerCloseButton: React.FunctionComponent<DrawerCloseButtonProps> = ({
  className = '',
  onClose = () => undefined as any,
  'aria-label': ariaLabel = 'Close drawer panel',
  ...props
}: DrawerCloseButtonProps) => (
  <div className={css(styles.drawerClose, className)} {...props}>
    <Button variant="plain" onClick={onClose} aria-label={ariaLabel} icon={<TimesIcon />} />
  </div>
);
DrawerCloseButton.displayName = 'DrawerCloseButton';
