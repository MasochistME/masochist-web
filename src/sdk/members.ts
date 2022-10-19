import { useQuery } from '@tanstack/react-query';
import { useAppContext } from 'shared/store/context';

/**
 *
 */
export const useAllMembers = () => {
	const { sdk } = useAppContext();

	const {
		data: membersData = [],
		isLoading,
		isFetched,
		isError,
	} = useQuery(['masochist', 'members', 'all'], () => sdk.getMembersList({}));

	return { membersData, isLoading, isFetched, isError };
};

/**
 *
 */
export const useCuratorMembers = () => {
	const { sdk } = useAppContext();

	const {
		data: membersData = [],
		isLoading,
		isFetched,
		isError,
	} = useQuery(['masochist', 'members', 'curator'], () =>
		sdk.getMembersList({ filter: { isMember: true } }),
	);

	return { membersData, isLoading, isFetched, isError };
};

/**
 *
 */
export const useMemberById = (steamId: string) => {
	const { sdk } = useAppContext();

	const {
		data: memberData,
		isLoading,
		isFetched,
		isError,
	} = useQuery(
		['masochist', 'member', steamId],
		() => sdk.getMemberById({ steamId }),
		{ enabled: !!steamId },
	);

	return { memberData, isLoading, isFetched, isError };
};

/**
 *
 */
export const useMemberBadges = (steamId: string) => {
	const { sdk } = useAppContext();

	const {
		data: memberBadgesData = [],
		isLoading,
		isFetched,
		isError,
	} = useQuery(
		['masochist', 'member', steamId, 'badges'],
		() => sdk.getMemberBadgeList({ steamId }),
		{ enabled: !!steamId },
	);

	return { memberBadgesData, isLoading, isFetched, isError };
};

/**
 *
 */
export const useMemberGames = (steamId: string) => {
	const { sdk } = useAppContext();

	const {
		data: memberGamesData = [],
		isLoading,
		isFetched,
		isError,
	} = useQuery(
		['masochist', 'member', steamId, 'games'],
		() => sdk.getMemberGameList({ steamId }),
		{ enabled: !!steamId },
	);

	return { memberGamesData, isLoading, isFetched, isError };
};

/**
 *
 */
export const useMemberAchievements = (steamId: string) => {
	const { sdk } = useAppContext();

	const {
		data: memberAchievementsData = [],
		isLoading,
		isFetched,
		isError,
	} = useQuery(
		['masochist', 'member', steamId, 'achievements'],
		() => sdk.getMemberAchievementList({ steamId }),
		{ enabled: !!steamId },
	);

	return { memberAchievementsData, isLoading, isFetched, isError };
};
