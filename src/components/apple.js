import React from "react";
import { observer } from "mobx-react-lite";
import AppleItem from "./appleItem";

function Apple(props) {
	const {
		isPicking,
		buttonText,
		notEatenQuantity,
		notEatenWeight,
		EatenQuantity,
		EatenWeight,
		pickApple,
	} = props.apple;

	function getAppleItem() {
		let data = [];
		props.apple.activedApples.forEach((apple) => {
			data.push(
				<AppleItem
					apple={apple}
					eatApple={props.apple.eatApple}
					key={apple.index}
				/>
			);
		});

		if (!data.length)
			data.push(
				<div className="empty-tip" key="empty">
					苹果篮子空空如也
				</div>
			);

		return data;
	}
	return (
		<div className="appleBusket">
			<div className="title">苹果篮子</div>

			<div className="stats">
				<div className="section">
					<div className="head">当前</div>
					<div className="content">
						{notEatenQuantity}个苹果，{notEatenWeight}克
					</div>
				</div>
				<div className="section">
					<div className="head">已吃掉</div>
					<div className="content">
						{EatenQuantity}个苹果，{EatenWeight}克
					</div>
				</div>
			</div>

			<div className="appleList">{getAppleItem()}</div>

			<div className="btn-div">
				<button
					className={isPicking ? "disabled" : ""}
					onClick={() => pickApple()}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}

export default observer(Apple);
