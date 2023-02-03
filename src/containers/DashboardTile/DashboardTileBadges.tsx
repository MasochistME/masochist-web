import React from 'react';
import styled from 'styled-components';
import { EventBadgeCreate, EventType } from '@masochistme/sdk/dist/v1/types';

import { media } from 'styles';
import { useBadges, useEvents } from 'sdk';
import { BadgeThumbnail, Section, SectionProps } from 'containers';
import { Flex, FetchError, QueryBoundary } from 'components';
import { Size } from 'components';

const NUMBER_OF_BADGES = 5;

type Props = Omit<SectionProps, 'content' | 'title'>;
export const DashboardTileBadges = (props: Props) => {
	const badges = new Array(NUMBER_OF_BADGES)
		.fill(null)
		.map((_, i: number) => (
			<BadgeThumbnail isLoading key={`badge-new-${i}`} size={Size.BIG} />
		));

	return (
		<QueryBoundary
			fallback={<Content content={badges} />}
			errorFallback={<Content content={<FetchError />} />}>
			<DashboardTileBadgesBoundary {...props} />
		</QueryBoundary>
	);
};

type ContentProps = Props & { content: React.ReactNode };
const Content = ({ content, ...props }: ContentProps) => (
	<Section
		width="100%"
		maxWidth="450px"
		title="New badges"
		content={<StyledNewBadges>{content}</StyledNewBadges>}
		{...props}
	/>
);

const DashboardTileBadgesBoundary = (props: Props) => {
	const { badgesData } = useBadges();
	const { eventsData } = useEvents({
		filter: { type: EventType.BADGE_CREATE },
		sort: { date: 'desc' },
		limit: NUMBER_OF_BADGES,
	});

	const badgeEvents = eventsData.filter(
		event => event.type === EventType.BADGE_CREATE,
	) as unknown as EventBadgeCreate[];

	const badges = badgeEvents.map(event => {
		const badge = badgesData.find(badge => String(badge._id) === event.badgeId);
		if (badge)
			return (
				<BadgeThumbnail
					key={`badge-new-${badge._id}`}
					badge={badge}
					size={Size.BIG}
				/>
			);
	});

	return <Content content={badges} {...props} />;
};

const StyledNewBadges = styled(Flex)`
	justify-content: center;
	gap: 16px;
	@media (max-width: ${media.smallNetbooks}) {
		gap: 4px;
		flex-wrap: wrap;
	}
`;
