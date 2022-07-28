import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { FlexDivNormal, BlueCard, GreenCard, OrangeCard, RedCard } from 'styledComponents/centerDiv';
import { Input, ShortInput } from 'styledComponents/inputs';
import { ModalBody, ModalContent, Modalfooter, ModalMain, ModalTitle, ModalTopAndBottom } from 'styledComponents/modalStyled'
import { TenSpacer, ZeroSpacer } from 'styledComponents/tenSpacer';
import { NavP, H1, CardHeader, CardNumber, CardFooterGood, CardFooterBad } from "../styledComponents/StyledText";

export default function DemoCard(props: any) {


	return (
		<>
			<FlexDivNormal>
				<BlueCard>
					<CardHeader>CURRENTLY FLYING</CardHeader>
					<ZeroSpacer />
					<CardNumber>1</CardNumber>
					<TenSpacer />
					<TenSpacer />
					<CardFooterGood><b>13</b>% Increase</CardFooterGood>
				</BlueCard>
				<div>
					<GreenCard>
						<CardHeader>TEAM MEMBERS</CardHeader>
						<ZeroSpacer />
						<CardNumber>{props.usercount}</CardNumber>
						<TenSpacer />
						<TenSpacer />
						<CardFooterGood><b>33</b>% Increase</CardFooterGood>
					</GreenCard>
				</div>
				<OrangeCard>

					<CardHeader>TOTAL BUDGET</CardHeader>
					<ZeroSpacer />
					<CardNumber>$80,990</CardNumber>
					<TenSpacer />
					<TenSpacer />
					<CardFooterBad><b>50</b>% Decrease</CardFooterBad>

				</OrangeCard>
				<RedCard>

					<CardHeader>NEW CUSTOMERS</CardHeader>
					<ZeroSpacer />
					<CardNumber>3</CardNumber>
					<TenSpacer />
					<TenSpacer />
					<CardFooterBad><b>0</b>% Decrease</CardFooterBad>

				</RedCard>
			</FlexDivNormal>

		</>
	)
}
