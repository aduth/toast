/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import DocumentHead from 'components/document-head';
import CrumbList from 'components/crumb-list';

export default function() {
	return (
		<div>
			<DocumentHead title="" />
			<CrumbList />
		</div>
	);
}
