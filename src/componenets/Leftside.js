/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Leftside = (props) => {
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />
					<a>
						<Photo />
						<Link>Monkey King</Link>
					</a>
					<a>
						<AddPhotoText>
							Mobile Developer at Saigon Mio
						</AddPhotoText>
					</a>
				</UserInfo>
				<Widget>
					<a>
						<div>
							<span>
								Connections<p>24</p>
							</span>
							<span>Grow your network</span>
						</div>
					</a>
					<a>
						<div>
							<span>
								Invatations<p>9</p>
							</span>
						</div>
					</a>
				</Widget>
				<Premium>
					<p>Access exclusive tool & insights</p>
					<p>Try premium for free</p>
				</Premium>
				<Item>
					<span>
						<img src='/images/item-icon.svg' alt='' />
						My Items
					</span>
				</Item>
			</ArtCard>

			<CommunityCard>
				<a>
					<span>Groups</span>
				</a>
				<a>
					<span>
						Events
						<img src='/images/plus-icon.svg' alt='' />
					</span>
				</a>
				<a>
					<span>Follow Hashtags</span>
				</a>
				<a>
					<span>Discover more</span>
				</a>
			</CommunityCard>
		</Container>
	);
};

const Container = styled.div`
	margin-left: 180px;
	grid-area: leftside;
`;

const ArtCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	transition: box-shadow 83ms;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 12px 12px 16px;
	word-wrap: break-word;
	word-break: break-word;
`;

const CardBackground = styled.div`
	background: url("/images/card-bg.svg");
	background-position: center;
	background-size: 462px;
	height: 54px;
	margin: -12px -12px 0;
`;

const Photo = styled.div`
	box-shadow: none;
	background-image: url("/images/monkey_king.jpg");
	width: 72px;
	height: 72px;
	box-sizing: border-box;
	background-clip: content-box;
	background-color: white;
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
	border: 2px solid white;
	margin: -38px auto 12px;
	border-radius: 50%;
`;

const Link = styled.div`
	font-size: 16px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.9);
	font-weight: 500;
`;

const AddPhotoText = styled.div`
	color: #0a66c2;
	margin-top: 4px;
	font-size: 12px;
	line-height: 1.33;
	font-weight: 400;
`;

const Widget = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 14px 12px;

	a:first-child {
		text-decoration: none;
		display: expanded;
		align-items: center;

		div {
			display: flex;
			flex-direction: column;
			text-align: left;
			span {
				justify-content: space-between;
				display: flex;
				font-size: 12px;
				line-height: 1.333;
				&:first-child {
					color: rgba(0, 0, 0, 0.6);
				}
				&:nth-child(2) {
					color: rgba(0, 0, 0, 1);
					font-weight: 500;
				}
			}
			p {
				color: #0a66c2;
				font-weight: 500;
			}
		}
	}
	a:nth-child(2) {
		text-decoration: none;
		display: expanded;
		align-items: center;
		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}
		div {
			padding-top: 7px;
			display: flex;
			flex-direction: column;
			text-align: left;
			span {
				justify-content: space-between;
				display: flex;
				font-size: 12px;
				line-height: 1.333;
				&:first-child {
					color: rgba(0, 0, 0, 0.6);
				}
				&:nth-child(2) {
					color: rgba(0, 0, 0, 1);
				}
			}
			p {
				color: #0a66c2;
				font-weight: 500;
			}
		}
	}
	svg {
		color: rgba(0, 0, 0, 1);
	}
`;
const Premium = styled.a`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	text-align: left;
	padding: 12px;
	font-size: 12px;
	display: block;
	p:nth-child(2) {
		color: #000000e6;
		text-decoration: underline;
		font-weight: 500;
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const Item = styled.a`
	border-color: rgba(0, 0, 0, 0.8);
	text-align: left;
	padding: 12px;
	font-size: 12px;
	font-weight: 500;
	display: block;
	span {
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 1);
		font-weight: 500;
		svg {
			color: rgba(0, 0, 0, 0.6);
		}
	}
	img {
		margin-right: 5px;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const CommunityCard = styled(ArtCard)`
	padding: 8px 0 0;
	text-align: left;
	display: flex;
	flex-direction: column;
	a {
		color: black;
		padding: 4px 12px 4px 12px;
		font-size: 12px;

		&:hover {
			color: #0a66c2;
		}

		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&:last-child {
			color: rgba(0, 0, 0, 0.6);
			text-decoration: none;

			border-top: 1px solid #d6cec2;
			padding: 12px;
			&:hover {
				background-color: rgba(0, 0, 0, 0.08);
			}
		}
	}
`;

export default Leftside;
