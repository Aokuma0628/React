import Link from 'next/link';
import Layout from '../components/Layout';
import Sampledata from '../components/Sampledata';

		/* nextのバージョンを最新にするとコンパイルが通らない */

export default () => (
	<Layout header='Fire' title='Sample data'>
		<Sampledata />
		<div id='back'>
			<Link href='/'>
				<a>&lt;&lt; Back to Index page</a>
			</Link>
		</div>
	</Layout>
);