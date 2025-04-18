import { Component } from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateVariant,
  NotificationDrawer,
  NotificationDrawerProps,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  EmptyStateActions,
  EmptyStateFooter
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

interface GroupsNotificationDrawerDemoState {
  firstGroupIsOpen: boolean;
  secondGroupIsOpen: boolean;
  thirdGroupIsOpen: boolean;
}

class LightweightNotificationDrawerDemo extends Component<NotificationDrawerProps, GroupsNotificationDrawerDemoState> {
  static displayName = 'LightweightNotificationDrawerDemo';
  constructor(props: NotificationDrawerProps) {
    super(props);
    this.state = {
      firstGroupIsOpen: false,
      secondGroupIsOpen: true,
      thirdGroupIsOpen: false
    };
  }

  onFocus = (id: string) => {
    if (id) {
      const element = document.getElementById(id);
      element?.focus();
    }
  };

  toggleFirstDrawer = (_event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      firstGroupIsOpen: value
    });
  };

  toggleSecondDrawer = (_event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      secondGroupIsOpen: value
    });
  };

  toggleThirdDrawer = (_event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      thirdGroupIsOpen: value
    });
  };

  render() {
    const {
      firstGroupIsOpen: firstGroupExpanded,
      secondGroupIsOpen: secondGroupExpanded,
      thirdGroupIsOpen: thirdGroupExpanded
    } = this.state;

    return (
      <NotificationDrawer>
        <NotificationDrawerHeader customText="2 unread alerts" />
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="First notification group"
              isExpanded={firstGroupExpanded}
              count={4}
              isRead
              onExpand={this.toggleFirstDrawer}
            >
              <NotificationDrawerList isHidden={!firstGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Info notification title"
                    srTitle="Info notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning">
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Warning notification title"
                    srTitle="Warning notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success">
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Success notification title"
                    srTitle="Success notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Second notification group"
              isExpanded={secondGroupExpanded}
              count={4}
              isRead
              onExpand={this.toggleSecondDrawer}
            >
              <NotificationDrawerList isHidden={!secondGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Info notification title w/action"
                    srTitle="Info notification:"
                  >
                    <Button variant="link">Action</Button>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning">
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Warning notification title"
                    srTitle="Warning notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success">
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Success notification title"
                    srTitle="Success notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Third notification group"
              isExpanded={thirdGroupExpanded}
              count={0}
              isRead
              onExpand={this.toggleThirdDrawer}
            >
              <NotificationDrawerList isHidden={!thirdGroupExpanded}>
                <EmptyState
                  headingLevel="h2"
                  titleText="No alerts found"
                  icon={SearchIcon}
                  variant={EmptyStateVariant.full}
                >
                  <EmptyStateBody>
                    There are currently no critical alerts firing. There may be firing alerts of other severities or
                    silenced critical alerts however.
                  </EmptyStateBody>
                  <EmptyStateFooter>
                    <EmptyStateActions>
                      <Button variant="link">Action</Button>
                    </EmptyStateActions>
                  </EmptyStateFooter>
                </EmptyState>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
          </NotificationDrawerGroupList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );
  }
}

LightweightNotificationDrawerDemo.displayName = 'LightweightNotificationDrawerDemo';

export { LightweightNotificationDrawerDemo };
