import Link from 'next/link';
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () => <div>
	<Layout header='Next' title='Top page.'>
		<p>Welcom to next.js!</p>
		<Image fname='image.jpg' size='250' />
		<hr />
		<div id='other'>
			<Link href='/other'>
				<a>Go to Other page >></a>
			</Link>
		</div>
		<div id='fire'>
			<Link href='/fire'>
				<a>Go to Fire page >></a>
			</Link>
		</div>
		<div id='calc'>
			<Link href='/calc'>
				<a>Go to Calc page >></a>
			</Link>
		</div>
		<div id='counter'>
			<Counter />
		</div>
	</Layout>
</div>
