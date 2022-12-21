import React from "react";
// import Button from "../HomePages/Button";
import "../../assets/css/SignIn.css";
import signInImage from "../../assets/img/signUp.webp";
import LocationHeader from "../SignUp/LocationHeader";
import { Button, Checkbox, Form, Input } from "antd";

export default function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signIn">
      <LocationHeader title={"Sign In"} location={"Pages"} />

      <div className="container">
        <div className="signIn__content row justify-content-between align-items-center">
          <div className="content__left col-lg-6 col-md-8 col-12 mx-auto mb-50">
            <img src={signInImage} alt="" />
          </div>

          <div className="content__right col-lg-5 col-md-8 col-12 mx-auto mb-50">
            <div className="section_title text-center">
              <h2>Sign In</h2>
            </div>

            {/* form input  */}
            {/* <div className="form_input">
                <input name="signIn_email" placeholder="Email" type="email" />
              </div>
              <div className="form_input">
                <input
                  name="signIn_password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="form_input_btn text-center">
                <Button value={"Sign In"} id={"signIn_Btn"} />
              </div>
              <p className="dontHaveAccount text-center">
                Dont't have any account,
                <NavLink to="/signup">
                  <a href="#"> Sign up here</a>
                </NavLink>
              </p> */}

            <Form
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Username" className="p-3" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" className="p-3" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 8,
                }}
                className="flex justify-center"
              >
                <Button
                  className="submit px-14 h-16 border-none bg-gray-500 hover:bg-gray-300 "
                  htmlType="submit"
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
