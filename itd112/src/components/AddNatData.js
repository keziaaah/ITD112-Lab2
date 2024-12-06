import React, { useState } from 'react';
import '../index.css'; // Import your CSS

const AddNatData = ({ onAdd }) => {
    const [respondent, setRespondent] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [ethnic, setEthnic] = useState('');
    const [academicPerformance, setAcademicPerformance] = useState('');
    const [academicDescription, setAcademicDescription] = useState('');
    const [iq, setIq] = useState('');
    const [typeSchool, setTypeSchool] = useState('');
    const [socioEconomicStatus, setSocioEconomicStatus] = useState('');
    const [studyHabit, setStudyHabit] = useState('');
    const [natResults, setNatResults] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!respondent || !age || !sex || !ethnic || !academicPerformance || !academicDescription || !iq || !typeSchool || !socioEconomicStatus || !studyHabit || !natResults) {
            alert('Please fill out all fields');
            return;
        }

        onAdd({
            Respondents: respondent,
            Age: age,
            Sex: sex,
            Ethnic: ethnic,
            Academic_Performance: academicPerformance,
            Academic_Description: academicDescription,
            IQ: iq,
            Type_School: typeSchool,
            Socio_Economic_Status: socioEconomicStatus,
            Study_Habit: studyHabit,
            NAT_Results: natResults,
        });

        setRespondent('');
        setAge('');
        setSex('');
        setEthnic('');
        setAcademicPerformance('');
        setAcademicDescription('');
        setIq('');
        setTypeSchool('');
        setSocioEconomicStatus('');
        setStudyHabit('');
        setNatResults('');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add New NAT Data</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="mb-3">
                    <label htmlFor="respondent" className="form-label">Respondent Name</label>
                    <input
                        id="respondent"
                        type="text"
                        className="form-control"
                        value={respondent}
                        onChange={(e) => setRespondent(e.target.value)}
                        placeholder="Enter Respondent Name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        id="age"
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Age"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="sex" className="form-label">Sex</label>
                    <input
                        id="sex"
                        type="text"
                        className="form-control"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        placeholder="Enter Sex"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ethnic" className="form-label">Ethnic Group</label>
                    <input
                        id="ethnic"
                        type="text"
                        className="form-control"
                        value={ethnic}
                        onChange={(e) => setEthnic(e.target.value)}
                        placeholder="Enter Ethnic Group"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="academicPerformance" className="form-label">Academic Performance</label>
                    <input
                        id="academicPerformance"
                        type="text"
                        className="form-control"
                        value={academicPerformance}
                        onChange={(e) => setAcademicPerformance(e.target.value)}
                        placeholder="Enter Academic Performance"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="academicDescription" className="form-label">Academic Description</label>
                    <input
                        id="academicDescription"
                        type="text"
                        className="form-control"
                        value={academicDescription}
                        onChange={(e) => setAcademicDescription(e.target.value)}
                        placeholder="Enter Academic Description"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="iq" className="form-label">IQ</label>
                    <input
                        id="iq"
                        type="text"
                        className="form-control"
                        value={iq}
                        onChange={(e) => setIq(e.target.value)}
                        placeholder="Enter IQ"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="typeSchool" className="form-label">Type of School</label>
                    <input
                        id="typeSchool"
                        type="text"
                        className="form-control"
                        value={typeSchool}
                        onChange={(e) => setTypeSchool(e.target.value)}
                        placeholder="Enter Type of School"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="socioEconomicStatus" className="form-label">Socio-Economic Status</label>
                    <input
                        id="socioEconomicStatus"
                        type="text"
                        className="form-control"
                        value={socioEconomicStatus}
                        onChange={(e) => setSocioEconomicStatus(e.target.value)}
                        placeholder="Enter Socio-Economic Status"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="studyHabit" className="form-label">Study Habit</label>
                    <input
                        id="studyHabit"
                        type="text"
                        className="form-control"
                        value={studyHabit}
                        onChange={(e) => setStudyHabit(e.target.value)}
                        placeholder="Enter Study Habit"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="natResults" className="form-label">NAT Results</label>
                    <input
                        id="natResults"
                        type="number"
                        className="form-control"
                        value={natResults}
                        onChange={(e) => setNatResults(e.target.value)}
                        placeholder="Enter NAT Results"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Add Data</button>
            </form>
        </div>
    );
};

export default AddNatData;
