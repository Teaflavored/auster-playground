import React from 'react';
import { useQuery } from '@apollo/client';
import { EPOCHES_QUERY } from '../../apollo/queries';

export function EpochsTable() {
	const { data } = useQuery(EPOCHES_QUERY);

	return (
		<div>
			<code>{JSON.stringify(data)}</code>
		</div>
	);
}