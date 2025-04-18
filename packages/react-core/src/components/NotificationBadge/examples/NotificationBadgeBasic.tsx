import { useState } from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const NotificationBadgeBasic: React.FunctionComponent = () => {
  const [readExpanded, setReadExpanded] = useState(false);
  const [unreadExpanded, setUnreadExpanded] = useState(false);
  const [attentionExpanded, setAttentionExpanded] = useState(false);

  const onReadClick = () => {
    setReadExpanded(!readExpanded);
  };

  const onUnreadClick = () => {
    setUnreadExpanded(!unreadExpanded);
  };

  const onAttentionClick = () => {
    setAttentionExpanded(!attentionExpanded);
  };

  return (
    <>
      <NotificationBadge
        variant={NotificationBadgeVariant.read}
        onClick={onReadClick}
        aria-label="Basic notification badge with read variant"
        isExpanded={readExpanded}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.unread}
        onClick={onUnreadClick}
        aria-label="Basic notification badge with unread variant"
        isExpanded={unreadExpanded}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.attention}
        onClick={onAttentionClick}
        aria-label="Basic notification badge with attention variant"
        isExpanded={attentionExpanded}
      />
    </>
  );
};
