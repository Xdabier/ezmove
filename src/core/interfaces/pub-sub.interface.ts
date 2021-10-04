import { PubSubTopicsEnum } from "../enums/pub-sub-topics.enum";

export interface PubSubInterface {
	topic: PubSubTopicsEnum;
	data?: any;
}
