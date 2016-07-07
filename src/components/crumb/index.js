/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { getCrumb } from 'state/selectors';
import Link from 'components/link';

function Crumb( { thumbnail, title, tags } ) {
	return (
		<div className="crumb">
			<div className="crumb__content">
				<div className="crumb__preview">
					{ thumbnail.src && (
						<img
							src={ thumbnail.src }
							className="crumb__preview-image" />
					) }
				</div>
				<div className="crumb__detail">
					<span className="crumb__title">
						{ title }
					</span>
					<ul className="crumb__detail-tags">
						{ map( tags, ( term ) => (
							<li
								key={ term.id }
								className="crumb__detail-tags-item">
								<Link
									href={ term.link }
									className="crumb__detail-tag">
									#{ term.name }
								</Link>
							</li>
						) ) }
					</ul>
				</div>
			</div>
		</div>
	);
}

export default connect( ( state, { id } ) => {
	return getCrumb( state, id );
} )( Crumb );
