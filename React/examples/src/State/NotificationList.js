
import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {   id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {   id: 2,
        message: "점심식사 시간입니다.",
    },
    {   id: 3,
        message: "이제 곧 퇴근 시간입니다 :>",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {      //생성자에서는 앞으로 사용할 데이터를 생성자에 넣어서 초기화한다
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({     //state를 업데이트 하기 위해 setState 함수 사용
                    notifications: notifications,
                });
            } 
        }, 2000);
    }
    
    //* 컴포넌트가 언마운트될때 cleanup 함수를 사용하시면 됨미다!
    //* 파이팅!
    
    // 요 코드 없으면 컴포넌트가 차례대로 안 뜬다
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => 
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                )}
            </div>
        );
    }
}

export default NotificationList;
