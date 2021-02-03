import { FC } from 'react';
import styled from 'styled-components';
import { Row, FlexDivCol } from 'styles/common';
import { useRouter } from 'next/router';
import Panel from 'sections/gov/components/Panel';
import CouncilBoard from './components/CouncilBoard';
import { SPACE_KEY } from 'constants/snapshot';

const Index: FC = () => {
	const router = useRouter();
	const defaultTab = (router.query.panel && router.query.panel[0]) || SPACE_KEY.COUNCIL;
	return (
		<Row>
			<LeftCol>
				<Panel currentTab={defaultTab} />
			</LeftCol>
			<RightCol>
				<CouncilBoard />
			</RightCol>
		</Row>
	);
};

const LeftCol = styled(FlexDivCol)`
	width: 700px;
	margin-right: 8px;
`;

const RightCol = styled(FlexDivCol)`
	width: 200px;
	margin-left: 8px;
`;

export default Index;