import styled from 'styled-components';

import { media } from 'styles';
import { Flex } from 'components';

export const SubPage = styled(Flex)`
	flex: 1 1 auto;
	flex-direction: row;
	align-items: flex-start;
	padding: 16px;
	width: 100%;
	gap: 16px;
	box-sizing: border-box;
	@media (max-width: ${media.netbooks}) {
		flex-direction: column;
		align-items: center;
	}
`;
