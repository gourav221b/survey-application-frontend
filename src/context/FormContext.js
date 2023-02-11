import { createContext, useState, useEffect } from "react";
// import { toast, cssTransition } from "react-toastify";
// import { status } from "../constants/statusConstant";
// import { toastConstants } from "../constants/toastConstant";
import uuid from 'react-uuid';
const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [formList, setformList] = useState(() => {

        const savedformLists = localStorage.getItem("formList");
        if (savedformLists)
            return JSON.parse(savedformLists);
        return [
            {
                id: uuid(),
                formTitle: "Cascading Ninja survey",
                formDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                formType: "Market Survey",
                status: "Processing",
                surveyor: "Gourav",
                surveyoremail: "gg@gg.com",
                mobileNumber: 9880380331,
                questions: [{
                    id: uuid(),
                    questionTitle: "Text Question 1",
                    questionType: "Paragraph",
                    responses: [
                        {
                            userid: uuid(),
                            response: "Response 1"
                        },
                        {
                            userid: uuid(),
                            response: "Response2"
                        }
                    ]
                }, {
                    id: uuid(),
                    questionTitle: "Scale Question 2",
                    questionType: "Linear Scale",
                    responses: [
                        {
                            userid: uuid(),
                            response: 1
                        },
                        {
                            userid: uuid(),
                            response: 5
                        }
                    ]
                },
                {
                    id: uuid(),
                    questionTitle: "MCQ Question 3",
                    questionType: "MCQ",
                    responses: [
                        {
                            userid: uuid(),
                            response: 1
                        },
                        {
                            userid: uuid(),
                            response: 5
                        }
                    ]
                }
                ]

            }
        ];

    });

    // formLink->(id)->id query i get form details. -> question (with associated id)-> response



    // const [modalOpen, setModalOpen] = useState(false);
    // const [notification, setNotification] = useState(() => {
    //     const savedNotification = localStorage.getItem("notification");
    //     if (savedNotification)
    //         return JSON.parse(savedNotification);
    //     return false;

    // });

    // useEffect(() => {
    //     localStorage.setItem('formListList', JSON.stringify(task));
    // }, [task]);

    // useEffect(() => {
    //     localStorage.setItem('notification', JSON.stringify(notification));
    // }, [notification]);

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_FORM':
                formList == undefined ? setformList(payload) :
                    setformList([...formList, payload])
                return;
            case 'REMOVE_FORM':
                setformList(formList.filter(formList => formList.id !== payload));
                return;
            case 'UPDATE_FORM':
                console.log(payload)
                const item = formList.find(
                    formList => formList.id === payload.id,
                );
                if (item) {

                    let newList = formList.map(item => item.id === payload.id ? { ...item, status: payload.status } : item)
                    setformList(newList)

                    return;
                }
                return;

            case 'RENAME_FORM':
                const item1 = formList.find(
                    formList => formList.id === payload.id,
                );
                if (item1) {

                    let newList = formList.map(item => item.id === payload.id ? { ...item, formListName: payload.formListName } : item)
                    setformList(newList)

                    return;
                }
                return;
            default:
                return;
        }
    };
    // const toggleModal = () => {
    //     setModalOpen(!modalOpen)
    // }
    // const toggleNotifications = () => {
    //     setNotification(!notification)
    // }

    // const toastMessage = (type, message) => {
    //     switch (type) {
    //         case toastConstants.SUCCESS: toast.success(message); return;
    //         case toastConstants.FAIL: toast.error(message); return;
    //         default: toast(message); return;
    //     }
    // }
    return (
        <FormContext.Provider value={{
            formList,
            // modalOpen,
            // toggleModal,
            dispatchUserEvent,
            // toastMessage,
            // notification,
            // toggleNotifications
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;