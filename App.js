import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListaItem from './src/components/ListaItems';
import AddItemArea from './src/components/AddItemArea';
import lista from './src/lista';

const Page = styled.SafeAreaView`
	flex:1;
`;

const Listagem = styled.FlatList`
	flex:1;
`;

export default () => {
	const [ items, setItems ] = useState(lista);
	return (
		<Page>
			<AddItemArea />
			<Listagem 
				data={items}
				renderItem={(item)=><ListaItem data={item} />}
				keyExtractor={(item) => item.id}
			/>
		</Page>
	);
};