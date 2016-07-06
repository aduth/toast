/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import DocumentHead from 'components/document-head';
import QueryCrumbs from 'components/query-crumbs';

export default function() {
	return (
		<div>
			<DocumentHead title="" />
			<QueryCrumbs />
			Home
		</div>
	);
}
