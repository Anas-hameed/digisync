
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import { Button, SIZE } from "baseui/button";
import EditIcon from '~/media/Images/edit1.png';
import MailIcon from '~/media/Images/email1.png';
import { Select, TYPE } from 'baseui/select';
import axiosInstance from '~/axios/axiosinstance';
import { useEffect, useState } from "react";
import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';



const SelectField = ({ team, value, setValue }) => {
    return (
        <div className="flex min-w-[200px]" >
            <Select
                placeholder="Select teams"
                type={TYPE.search}
                multi
                options={team}
                labelKey="label"
                valueKey="label"
                onChange={({ value }) => {
                    setValue(value)
                    console.log(value);
                }
                }
                value={value}
            />
        </div>
    );
}


const EmailEditorNavBar = ({ name, checkboxes, setCheckboxes, submitMail }) => {
    const [team, setTeam] = useState([]);
    const [value, setValue] = useState([]);
    useEffect(() => {
        axiosInstance.get('/email/team')
            .then((res) => {
                if (res.status === 200) {
                    const data = [];
                    if (res.data.length > 0) {
                        for (let i = 0; i < res.data.length; i++) {
                            data.push({ id: res.data[i]._id, label: res.data[i].teamName });
                        }
                    }
                    console.log(data);
                    setTeam(data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <nav className="">
            <div className="flex items-center justify-between p-4">
                <div className="flex gap-x-4 items-center">
                    <h3 className="font-poppins font-semibold text-[18px] text-gray-500">Subject:</h3>
                    <p className="underline font-poppins text-[18px] text-gray-500">{name}</p>
                    <img className="" src={EditIcon} alt="edit_icon" width={16} />
                </div>
                <div className="flex gap-x-4 items-center">
                    <Checkbox
                        checked={checkboxes[0]}
                        onChange={e => {
                            const nextCheckboxes = [...checkboxes];
                            nextCheckboxes[0] = e.currentTarget.checked;
                            setCheckboxes(nextCheckboxes);
                            console.log(nextCheckboxes);
                        }}
                        checkmarkType={STYLE_TYPE.toggle_round}
                    >
                        <span className="font-poppins font-semibold text-[18px] text-gray-500">
                            Simple Mail
                        </span>
                    </Checkbox>
                    <SelectField team={team} value={value} setValue={setValue} />
                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "rgb(28,100,242)",
                                buttonPrimaryHover: "rgb(26,86,219)"
                            }
                        })}>
                        <div className="flex items-center">

                            <Button style={{ fontWeight: '600', fontSize: '16px', fontFamily: 'Roboto' }}
                                onClick={() => submitMail(value)}
                                size={SIZE.compact}
                                startEnhancer={() => <img src={MailIcon} alt='Mail' />}>
                                Send Mail
                            </Button>
                        </div>
                    </ThemeProvider>
                </div>

            </div>
            <div className="w-full border-[1px] border-white border-b-[rgba(0,0,0,.2)]"></div>
        </nav>
    );
}

export default EmailEditorNavBar;