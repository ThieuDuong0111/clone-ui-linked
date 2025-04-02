import styled from "styled-components";

const Main = (props) => {
	return (
		<Container>
			<ShareBox>
				<div>
					<img src='/images/monkey_king.jpg' alt='' />
					<button>Start a post</button>
				</div>
				<div>
					<button>
						<img
							src='/images/photo-icon.svg'
							alt=''
							width='22px'
							height='22px'
						/>
						<span>Photo</span>
					</button>

					<button>
						<img
							src='/images/video-icon.svg'
							alt=''
							width='22px'
							height='22px'
						/>
						<span>Video</span>
					</button>

					<button>
						<img
							src='/images/event-icon.svg'
							alt=''
							width='22px'
							height='22px'
						/>
						<span>Event</span>
					</button>

					<button>
						<img
							src='/images/article-icon.svg'
							alt=''
							width='22px'
							height='22px'
						/>
						<span>Write article</span>
					</button>
				</div>
			</ShareBox>
			<Line>
				<hr />
			</Line>
			<Post>
				<PostHeader>
					<PostAvatar>
						<img src='/images/monkey_king.jpg' alt='' />
						<PostPersonalInfo>
							<div>
								<span>Bạch Mã Ôn</span>
								<span>•</span>
								<span>2nd</span>
							</div>
							<div>
								<span>IT Recruitment Consultant</span>
							</div>
							<div>
								<span>23m</span>
								<span>•</span>
								<span>Edited</span>
							</div>
						</PostPersonalInfo>
					</PostAvatar>
					<PostFollow>+ Follow</PostFollow>
				</PostHeader>
				<PostContent>
					<div>
						MONDAY is back with great <span>#opportunities</span> 🎉
					</div>
					<div>
						- Frontend Developer - up to 2500$ gross -{" "}
						<span>#Onsite</span> (Dist 7) - <span>#fluent</span>{" "}
						English - #product (Isarel) - 3+ YOE
					</div>
					<div>
						- Frontend Developer - up to 2500$ gross -{" "}
						<span>#Onsite</span> (Dist 7) - <span>#fluent</span>{" "}
						English - #product (Isarel) - 3+ YOE
					</div>
				</PostContent>
				<PostImage>
					<img src='/images/post_image.png' alt='' />
				</PostImage>
				<PostSocial>
					<div>
						<span>
							<img
								src='https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
								alt=''
							/>
							<img
								src='https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
								alt=''
							/>
							<img
								src='https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
								alt=''
							/>
						</span>
						<span>Đường Tăng and 30 others</span>
					</div>
					<div>2 comments 4 reposts</div>
				</PostSocial>
				<PostAction>
					<div>
						<img
							src='https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
							alt=''
						/>
						<span>Like</span>
					</div>
					<div>
						<img
							src='https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
							alt=''
						/>
						<span>Comment</span>
					</div>
					<div>
						<img
							src='https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
							alt=''
						/>
						<span>Repost</span>
					</div>
					<div>
						<img
							src='https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus'
							alt=''
						/>
						<span>Send</span>
					</div>
				</PostAction>
				<PostComment>
					<div>
						<img src='/images/monkey_king.jpg' alt='' />
						<button>Add a comment...</button>
					</div>
				</PostComment>
			</Post>
		</Container>
	);
};

const Container = styled.div`
	grid-area: main;
`;

const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 6px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 8px;
	background: white;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 600;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
				span {
					color: #70b5f9;
				}
			}
		}
	}
`;

const Line = styled.div`
	padding-top: 1px;
	padding-bottom: 2px;
`;

const Post = styled(CommonCard)``;

const PostHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 13px;
`;

const PostAvatar = styled.div`
	display: flex;
	flex-direction: row;
	img {
		margin-right: 6px;
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}
`;

const PostFollow = styled.div`
	padding-top: 12px;
	color: #0a66c2;
	font-weight: 600;
`;

const PostPersonalInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	div:first-child {
		font-size: 14px;

		color: #000000e6;
		span:nth-child(1) {
			font-weight: 600;
		}
		span:nth-child(2) {
			display: inline-block;
			padding: 0px 5px;
		}
		span:nth-child(3) {
			color: #00000099;
		}
	}
	div:nth-child(2) {
		font-size: 12px;
		color: #00000099;
		padding: 3px 0px;
	}
	div:nth-child(3) {
		font-size: 12px;

		color: #00000099;
		span:nth-child(2) {
			display: inline-block;
			padding: 0px 4px;
		}
	}
`;

const PostContent = styled.div`
	padding: 10px 13px;
	font-size: 14px;
	text-align: start;
	line-height: 2;
	color: #000000e6;
	span {
		color: #0a66c2;
		font-weight: 600;
	}
`;

const PostImage = styled.div`
	img {
		width: 100%;
	}
`;
const PostSocial = styled.div`
	padding: 5px 13px;
	justify-content: space-between;
	font-size: 12px;
	color: #000000e6;
	display: flex;
	div:first-child {
		float: left;

		img {
			width: 16px;
			height: 16px;
		}
		img:nth-child(2) {
			position: absolute;
			left: 23px;
		}
		img:nth-child(3) {
			position: absolute;
			left: 33px;
		}
		span:nth-child(2) {
			position: absolute;
			left: 55px;
		}
	}
`;

const PostAction = styled.div`
	margin: 0px 13px;
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	clear: both;

	div {
		font-size: 14px;
		color: #00000099;
		font-weight: 600;
		padding: 12px 0px;
		justify-content: center;
		align-items: center;
		float: left;
		display: flex;
		width: 25%;

		/* align-items: center; */
		img {
			/* background-color: red; */
			width: 24px;
			height: 24px;
			margin-right: 8px;
		}
		span {
			/* background-color: red; */
		}
	}
`;

const PostComment = styled.div`
	clear: both;
	padding-bottom: 20px;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 300;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
				span {
					color: #70b5f9;
				}
			}
		}
	}
`;

export default Main;
