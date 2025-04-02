/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Rightside = (props) => {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Add to your feed</h2>
					<img src='/images/feed-icon.svg' alt='' />
				</Title>
				<FeedList>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>Tôn Ngộ Không</span>
							<p>
								Urgently looking for Fullstack /Mobile Dev-
								NodeJS, Python, Angular/Vue/React, Flutter/Dart
							</p>
							<button>+ Follow</button>
						</div>
					</li>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>Tề Thiên Đại Thánh</span>
							<p>
								Former Product Design Manager at Manabie ◆ Guest
								Lecturer at University of Lincoln ◆ Head of
								Design Faculty at Nordic Coder School
							</p>
							<button>+ Follow</button>
						</div>
					</li>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>Con Khỉ Đột</span>
							<p>Company • Human Resources</p>
							<button>+ Follow</button>
						</div>
					</li>
				</FeedList>

				<Recommendation>
					View all recommendations
					<img src='/images/right-icon.svg' alt='' />
				</Recommendation>
			</FollowCard>
			<BannerCard>
				<img src='/images/who_hiring.png' alt='' />
			</BannerCard>
		</Container>
	);
};

const Container = styled.div`
	margin-right: 180px;
	grid-area: rightside;
`;

const FollowCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 6px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	padding: 12px;
`;

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
	margin-top: 16px;
	li {
		display: flex;
		align-items: start;
		margin: 12px 0;
		position: relative;
		font-size: 14px;
		& > div {
			display: flex;
			flex-direction: column;
			align-items: start;
			span {
				&:first-child {
					font-size: 14px;
					text-align: start;
					font-weight: 600;
					line-height: 1.5;
					color: #000000e6;
				}
			}
			p {
				font-size: 12px;
				text-align: start;
				line-height: 1.5;
				color: #00000099;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		button {
			margin-top: 5px;
			background-color: transparent;
			color: rgba(0, 0, 0, 0.6);

			padding: 16px;
			align-items: center;
			border-radius: 20px;
			box-sizing: border-box;
			font-weight: 600;
			display: inline-flex;
			justify-content: center;
			max-height: 32px;
			max-width: 480px;
			text-align: center;
			outline: none;
		}
	}
`;

const Avatar = styled.div`
	background-image: url("/images/monkey_king.jpg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	margin-right: 8px;
	border-radius: 50%;
`;

const Recommendation = styled.a`
	padding-top: 5px;
	color: #0a66c2;
	display: flex;
	align-items: center;
	font-size: 14px;
`;

const BannerCard = styled.div`
	border-radius: 6px;
	position: relative;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	img {
		width: 100%;
	}
`;

export default Rightside;
