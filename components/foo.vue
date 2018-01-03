<template>
	<div class="footer">
		<div class="footer1">
			<div class="description">
				<div class="title d-flex">
					<div class="p-text">
						P
					</div>
					<div class="h-text">
						h
					</div>
					<div class="i-text">
						i
					</div>
					<div class="m-text">
						m
					</div>
					<div class="n3-text">
						3
					</div>
					<div class="n6-text">
						6
					</div>
					<div class="n5-text">
						5
					</div>
				</div>
				<div class="text">
					Là website cập nhật phim mới nhất và nhanh nhất từ tất cả các nguồn.
					<br>
					Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...
				</div>
				<div class="contact">
					<a href="https://www.facebook.com/phim365.net/" target="_blank">
						<div class="fb">
							<i class="fa fa-facebook"></i> facebook
						</div>
					</a>
					<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=linkphim1234@gmail.com" target="_blank">
						<div class="mail">
							<i class="fa fa-envelope-o"></i> mail
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="footer2">
			<ul>
				<li>Giới thiệu</li>
				<li>Thỏa thuận sử dụng</li>
				<li>Liên hệ</li>
			</ul>
			<div class="copy-right">
				Copyright © Phim365 2018
			</div>
		</div>
	</div>
</template>

<style scoped>
	.footer1 {
		width: 100%;
		height: 200px;
		background-color: #f4f4f4;
		display: flex;
		justify-content: center;
	}
	.description {
		float: left;
		width: 60%;
		padding-top: 10px;
	}
	.description .title {
		font-size: 30px;
		font-weight: bold;
		color: #f7da53;
	}
	.description .text {
		color: #868fa1;
	}
	.description .contact {
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
	.contact .fb, .contact .mail {
		float: left;
		padding: 5px 20px;
		border: 1px solid #868fa1;
		margin: 0px 10px;
		color: black;
		color: #868fa1;
	}
	.contact .fb:hover, .contact .mail:hover {
		cursor: pointer;
		border-radius: 5px;
	}
	.contact .fb:hover .fa-facebook {
		color: #4267b2;
	}
	.contact .mail:hover .fa-envelope-o {
		color: #f17676;
	}
	.footer2 {
		text-align: center;
		padding: 20px 0px;
		font-size: 14px;
		background-color: #f4f4f4;
		border-top: 1px solid #ccc;
		color: #868fa1;
	}
	.footer2 ul {
		display: flex;
		padding: 0px;
		margin: 0px;
		justify-content: center;
	}
	.footer2 ul li {
		margin: 0px 20px;
	}
	.footer2 .copy-right {
		padding-top: 10px;
	}
	.p-text {
		color: #34A853;
	}
	.h-text {
		color: #EA4335;
	}
	.i-text {
		color: #4285F4;
	}
	.m-text {
		color: #FBBC05;
	}
	.n3-text {
		color: #34A853;
	}
	.n6-text {
		color: #EA4335;
	}
	.n5-text {
		color: #4285F4;
	}
	@media(max-width: 575px) {
		.footer1 {
			height: 350px;
		}
		.description {
			width: 90%;
		}
		ul {
		 	list-style: none;
		}
	}
	@media(max-width: 767px) {
		.footer1 {
			height: 300px;
		}
	}
</style>