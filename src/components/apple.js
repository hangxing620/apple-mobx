import React from "react";
import { observer } from "mobx-react-lite";
import AppleItem from "./appleItem";
import { useRootStore } from '../stores/RootStore'

function Apple() {
	const {appleStore} = useRootStore()

	function getAppleItem() {
		let data = [];
		appleStore.activedApples.forEach((apple) => {
			data.push(
				<AppleItem
					apple={apple}
					eatApple={appleStore.eatApple}
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
						{appleStore.notEatenQuantity}个苹果，{appleStore.notEatenWeight}克
					</div>
				</div>
				<div className="section">
					<div className="head">已吃掉</div>
					<div className="content">
						{appleStore.EatenQuantity}个苹果，{appleStore.EatenWeight}克
					</div>
				</div>
			</div>

			<div className="appleList">{getAppleItem()}</div>

			<div className="btn-div">
				<button
					className={appleStore.isPicking ? "disabled" : ""}
					onClick={() => appleStore.pickApple()}
				>
					{appleStore.buttonText}
				</button>
			</div>
		</div>
	);
}

export default observer(Apple);
