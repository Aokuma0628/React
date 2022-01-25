import Link from 'next/link';
import style from '../static/Style';
import Layout from '../components/Layout';

export default () => <div>
	<Layout header='Other' title='Other page.'>
		<p>This is Other page.</p>
		<hr />
		<div id='back'>
			<Link href='/'>
				<a>&lt;&lt; Back to Index page >></a>
			</Link>
		</div>
	</Layout>
</div>
