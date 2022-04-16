import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const TabsBar = ({
	defaultActive,
	items,
	elements,
}: {
	defaultActive: string;
	items: string[];
	elements: ReactJSXElement[];
}) => {
	return (
		<Tabs
			defaultActiveKey={defaultActive}
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
