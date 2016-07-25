export default function isRequestingCrumbs( state, query = {} ) {
	return state.crumbs.requestingQuery[ JSON.stringify( query ) ];
}
