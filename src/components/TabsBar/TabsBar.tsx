import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const TabsBar = ({
	defaultKey,
	items,
	elements,
}: {
	defaultKey: string;
	items: string[];
	elements: ReactJSXElement[];
}) => {
	return (
		<Tabs
			defaultActiveKey={defaultKey}
			id='uncontrolled-tab'
			className='markdown-preview'>
			{items.map((item, index) => (
				<Tab key={index} eventKey={item} title={item}>
					{elements[index]}
				</Tab>
			))}
		</Tabs>
	);
};

export default TabsBar;
