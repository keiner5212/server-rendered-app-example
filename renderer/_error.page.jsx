import PropTypes from "prop-types";
import notFoundImg from "../assets/images/NotFound.svg";

export { Page };

Page.propTypes = {
	is404: PropTypes.bool,
};
function Page({ is404 }) {
	if (is404) {
		return (
			<>
				<section className="flex flex-row items-center justify-center w-screen h-screen p-10">
					<div className="">
						<img
							src={notFoundImg}
							alt="404"
							height="350px"
							width="350px"
						/>
					</div>
					<div>
						<p className="my-4">
							<h1>404</h1>
							<h2>UH OH! You&apos;re lost.</h2>
							<p>
								The page you are looking for does not exist. How
								you got here is a mystery. But you can click the
								button below to go back.
							</p>
						</p>
						<button className="text-blue-700 border border-gray-300 bg-transparent focus:outline-none rounded-full text-sm text-center">
							<a
								className=" flex flex-row  items-center justify-center px-5 py-2.5"
								href="/"
							>
								HOME
							</a>
						</button>
					</div>
				</section>
			</>
		);
	} else {
		return (
			<>
				<section className="flex flex-row items-center justify-center w-screen h-screen p-10">
					<div className="">
						<img
							src={notFoundImg}
							alt="404"
							height="350px"
							width="350px"
						/>
					</div>
					<div>
						<p className="my-4">
							<h1>500</h1>
							<h2>UH OH! Internal Error.</h2>
							<p>Something went wrong.</p>
						</p>
						<button className="text-blue-700 border border-gray-300 bg-transparent focus:outline-none rounded-full text-sm text-center">
							<a
								className=" flex flex-row  items-center justify-center px-5 py-2.5"
								href="/"
							>
								HOME
							</a>
						</button>
					</div>
				</section>
			</>
		);
	}
}
