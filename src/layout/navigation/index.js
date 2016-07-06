/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import Link from 'components/link';

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li><Link href="/">Home</Link></li>
			</ul>
		</nav>
	);
}
