import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			description: "",
			gender: 0,
			language: "en",
			status: false,
		};
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({
			[name]: value,
		});
	}
	onHandleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">Form</h3>
							</div>
							<div className="panel-body">
								<form onSubmit={this.onHandleSubmit}>
									<div className="form-group">
										<label>Username: </label>
										<input
											type="text"
											className="form-control"
											onChange={this.onHandleChange}
											name="username"
											value={this.state.username}
										/>
									</div>
									<div className="form-group">
										<label>Password: </label>
										<input
											type="password"
											className="form-control"
											onChange={this.onHandleChange}
											name="password"
											value={this.state.password}
										/>
									</div>
									<div className="form-group">
										<label>Mô tả: </label>

										<textarea
											name="description"
											className="form-control"
											rows="3"
											onChange={this.onHandleChange}
											value={this.state.description}
										></textarea>
									</div>
									<label>Giới tính: </label>
									<select
										name="gender"
										className="form-control"
										onChange={this.onHandleChange}
										value={this.state.gender}
									>
										<option value={0}>Nữ</option>
										<option value={1}>Nam</option>
									</select>
									<br />
									<label>Ngôn ngữ</label>
									<div className="radio">
										<label>
											<input
												type="radio"
												name="language"
												value="en"
												onChange={this.onHandleChange}
												checked={this.state.language === "en"}
											/>
											Tiếng Anh
										</label>
										<br />
										<label>
											<input
												type="radio"
												name="language"
												value="vi"
												onChange={this.onHandleChange}
												checked={this.state.language === "vi"}
											/>
											Tiếng Việt
										</label>
									</div>
									<div className="checkbox">
										<label>
											<input
												type="checkbox"
												name="status"
												value={true}
												onChange={this.onHandleChange}
												checked={this.state.status === true}
											/>
											Trạng thái
										</label>
									</div>
									<button type="submit" className="btn btn-primary">
										Lưu lại
									</button>
									&nbsp;
									<button type="reset" className="btn btn-default">
										Xóa
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
