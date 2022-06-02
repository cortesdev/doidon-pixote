import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { FlexSpacer } from '../atoms/FlexSpacer';
import Typography from '../atoms/Typography';

const DivLoading = styled(Stack)`
    background: rgb(0 68 255);
    height: 100vh;
    align-items: center;
    padding: 2rem 10rem;
    color: white;
`;

const CenterVertical = styled(Stack)`
    margin: auto 0;
`;

const CenterTitle = styled(Stack)`
    align-items: center;
    justify-content: space-between;
`;

const OneLine = styled(Stack)`
    display: inline;
`;

export const Loader: FC = ({ ...props }) => {
    console.log("Loader");

    return (
        <DivLoading direction="column">
            <CenterVertical>
                <img src="/svg/doidon_logo_white.svg" alt="doidon brand home" width={400} height={450} />

                <CenterTitle>                   
                    <OneLine>
                        <Typography size='16px'>LOADING  <FlexSpacer minWidth={1}/><img src="/images/loader.gif" alt="doidon loader" width={20} height={20} /></Typography>
                    </OneLine>
                </CenterTitle>
            </CenterVertical>
        </DivLoading>
    );
};