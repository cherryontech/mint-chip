import { db } from '../firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import Button from '../components/Button';
import { useState } from 'react';

export default function Challenges() {
  // use state to use data
  const [teamData, setTeamData] = useState(null);

  // add a new document in the collection test function
  async function writeTestDoc() {
    // create a collection with a document called team
    try {
      await setDoc(doc(db, 'test', 'team'), {
        name: 'Mint Chip Mavericks',
        sprintsCompleted: 3,
      });
      console.log('New Team data added');
    } catch (error) {
      console.error('The error found', error);
    }
  }

  // update data in an existing doc
  async function addDataToDoc() {
    const teamDocRef = doc(db, 'test', 'team');
    await updateDoc(teamDocRef, {
      members: 3,
    });

    console.log('New field added');
  }

  // read data in the doc to display
  async function readTestDoc() {
    const teamDocRef = doc(db, 'test', 'team');
    const teamDocSnap = await getDoc(teamDocRef);

    if (teamDocSnap.exists()) {
      console.log('document data', teamDocSnap.data());
      setTeamData(teamDocSnap.data());
    } else {
      console.log('there is no data');
    }
  }

  return (
    <div className="min-h-screen bg-emerald-100 flex flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-500">Challenges Page! 🎉</h1>

      {/* test write document button */}
      <Button
        onClick={writeTestDoc}
        label="create a collection/document"
        size="lg"
      />

      {/* update test document button */}
      <Button
        onClick={addDataToDoc}
        label="add data field to a document"
        size="lg"
      />

      {/* test read document button */}
      <Button
        onClick={readTestDoc}
        label="read a document and display data"
        size="lg"
      />

      {/* tester sentence with the added firestore data */}
      {teamData && (
        <p>
          {teamData.name} has {teamData.members} members and completed{' '}
          {teamData.sprintsCompleted} sprints!
        </p>
      )}
    </div>
  );
}
