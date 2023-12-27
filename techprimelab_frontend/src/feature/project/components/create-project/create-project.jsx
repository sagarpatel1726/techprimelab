import React, { useState } from 'react'
import styles from './create-project.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosInstance } from '../../../../axios/axios.instance';
import { useNavigate } from 'react-router-dom';

const CreatProjectSchema = Yup.object().shape({
    theme: Yup.string().required('Email is required').required('Theme is required'),
    reason: Yup.string().required('Reason is required'),
    type: Yup.string().required('Type is required'),
    division: Yup.string().required('Division is required'),
    category: Yup.string().required('Category is required'),
    priority: Yup.string().required('Priority is required'),
    department: Yup.string().required('Department is required'),
    startdate: Yup.string().required('Start Date is required'),
    enddate: Yup.string().required('End Date is required'),
    location: Yup.string().required('Location is required')
});


function CreateProject() {
    const navigation = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const createProject = (value) => {
        axiosInstance.post('/project',value).then(res => console.log(res)).catch(err => setErrorMessage(err.response.data.error.message));
    }

    const logout = () => {
        sessionStorage.removeItem('authToken');
        navigation('/');
    }

    return (
        <div className={`container-fluid ${styles.wrapper}`}>
            <div className="row">
                <div className={`col-sm-12`}>
                    <div className={`${styles.backgroundImage}`}>
                        <div className={`text-center ${styles.header}`}>
                            <div className={`${styles.title}`}>
                                <img src={process.env.PUBLIC_URL + "/images/back arrow.svg"} alt="back arrow.svg" />
                                <h5>Create Project</h5>
                            </div>
                            <img className={`${styles.logo}`} src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="logo.svg" height={"60%"} />
                            <img className={`${styles.logout}`} onClick={logout} src={process.env.PUBLIC_URL + "/images/Logout.svg"} alt="logout.svg" />
                        </div>
                    </div>
                    
                    <div className={`${styles.projectContent}`}>
                    
                        <Formik initialValues={{ theme: '', reason: 'for business', type: 'internal', division: 'division A', category: 'quality A', priority: 'high', department: 'straregy', startdate: '', enddate: '', location: 'pune' }} validationSchema={CreatProjectSchema} onSubmit={(value) => createProject({status: 'registered',...value})}>
                            {({ errors, touched, values }) => (
                                <Form className={`${styles.form}`}>
                                    <div className="row">
                                    <div className="col-sm-12 text-danger">
                                    {errorMessage}
                                    </div>
                                    </div>
                                    <div className={`row justify-content-between ${styles.themeRow}`}>
                                        <div className="col-sm-7">
                                            <Field type="text" className={`form-control ${styles.bigInput} ${(errors.theme && touched.theme) ? styles.errorInputfield : ''}`} name="theme" id="theme"  placeholder="Enter Project Theme" />
                                            <div className=''>{errors.theme && touched.theme ? (<div className='text-danger'>{errors.theme}</div>) : null}</div>
                                        </div>
                                        <div className={`col-sm-2 text-right ${styles.saveButtonDextop}`}>
                                            <button type="submit" className={`${styles.button}`}>Save Project</button>
                                        </div>
                                    </div>
                                    <div className={`row`}>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="reason">Reason</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.reason && touched.reason) ? styles.errorInputfield : ''}`} name="reason" id="reason" value={values.reason}>
                                                <option value="for business">For Business</option>
                                                <option value="for demo">For Demo</option>
                                            </Field>
                                            <div>{errors.reason && touched.reason ? (<div className='text-danger'>{errors.reason}</div>) : null}</div>

                                        </div>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="type">Type</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.password && touched.password) ? styles.errorInputfield : ''}`} name="type" id="type" value={values.type}>
                                                <option value="internal">Internal</option>
                                                <option value="out source">Out Source</option>
                                                <option value="fix cost">Fix Cost</option>
                                            </Field>
                                            <div>{errors.type && touched.type ? (<div className='text-danger'>{errors.type}</div>) : null}</div>
                                        </div>
                                        <div className="col-sm-3">
                                            <label as="select" htmlFor="division">Division</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.division && touched.division) ? styles.errorInputfield : ''}`} name="division" id="division" value={values.division}>
                                                <option value="division A">Division A</option>
                                                <option value="division B">Division B</option>
                                                <option value="division C">Division C</option>
                                            </Field>
                                            <div>{errors.division && touched.division ? (<div className='text-danger'>{errors.division}</div>) : null}</div>
                                        </div>
                                    </div>
                                    <div className={`row ${styles.Row}`}>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="category">Category</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.category && touched.category) ? styles.errorInputfield : ''}`} name="category" id="category" value={values.category}>
                                                <option value="quality A">Quality A</option>
                                                <option value="quality B">Quality B</option>
                                                <option value="quality C">Quality C</option>
                                            </Field>
                                            <div>{errors.category && touched.category ? (<div className='text-danger'>{errors.category}</div>) : null}</div>
                                        </div>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="priority">Priority</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.priority && touched.priority) ? styles.errorInputfield : ''}`} name="priority" id="priority" value={values.priority}>
                                                <option value="high">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low C</option>
                                            </Field>
                                            <div>{errors.priority && touched.priority ? (<div className='text-danger'>{errors.priority}</div>) : null}</div>
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="department">Department</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.department && touched.department) ? styles.errorInputfield : ''}`} name="department" id="department" value={values.department}>
                                                <option value="strategy">Strategy</option>
                                                <option value="development">Development</option>
                                                <option value="testing">Testing</option>
                                            </Field>
                                            <div>{errors.department && touched.department ? (<div className='text-danger'>{errors.department}</div>) : null}</div>
                                        </div>
                                    </div>
                                    <div className={`row ${styles.Row}`}>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="startdate">Start Date as per Project Plan</label>
                                            <Field type="date" className={`form-control ${styles.input} ${(errors.startdate && touched.startdate) ? styles.errorInputfield : ''}`} name="startdate" id="startdate" value={values.startdate}/>
                                            <div>{errors.startdate && touched.startdate ? (<div className='text-danger'>{errors.startdate}</div>) : null}</div>
                                        </div>
                                        <div className={`col-sm-3 ${styles.inputWrapper}`}>
                                            <label htmlFor="enddate">End Date as per Project Plan</label>
                                            <Field type="date" className={`form-control ${styles.input} ${(errors.enddate && touched.enddate) ? styles.errorInputfield : ''}`} name="enddate" id="enddate" value={values.enddate}/>
                                            <div>{errors.enddate && touched.enddate ? (<div className='text-danger'>{errors.enddate}</div>) : null}</div>
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="location">Location</label>
                                            <Field as="select" className={`form-control ${styles.input} ${(errors.location && touched.location) ? styles.errorInputfield : ''}`} name="location" id="location" value={values.location}>
                                                <option value="pune">Pune</option>
                                                <option value="ahmedabad">Ahmedabad</option>
                                                <option value="mumbai">Mumbai</option>
                                            </Field>
                                            <div>{errors.location && touched.location ? (<div className='text-danger'>{errors.location}</div>) : null}</div>
                                        </div>
                                        <div className={`row flex-row-reverse w-100 ${styles.Row}`}>
                                            <div className={`col-sm-3 ${styles.inputstatusWrapper}`}>
                                                <label>status:</label><span className='font-weight-bold'> Registered</span>
                                            </div>
                                            <div className={`col-sm-2 text-right ${styles.saveButtonMobile}`}>
                                                <button type="submit" className={`${styles.button}`}>Save Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateProject;
