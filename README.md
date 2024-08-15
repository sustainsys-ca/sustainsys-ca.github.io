This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# How to add new Members or Events to the website

Whether you are adding new members or events, the task can be broken down into two very simple steps:
1. Adding the member/event information
2. Adding the picture

Here is what that looks like in detail,

## STEP 1: Adding member/event information
For starters, you should be on the [SustainSys Repository](https://github.com/sustainsys-ca/sustainsys-ca.github.io), and you should see something like this:

<img width="1440" alt="Screenshot 2024-07-21 at 4 50 03 PM" src="https://github.com/user-attachments/assets/15089506-2d6a-40f8-aca8-da01fb06c7b5">

These are the files in the website, but the only thing important for this step is the AllMembers folder:

<img width="805" alt="Screenshot 2024-07-21 at 4 51 19 PM" src="https://github.com/user-attachments/assets/05f90c8f-531b-439e-a865-3ac7f78677e6">

Start by clicking on it which will lead to a similar page with other options:

<img width="1440" alt="Screenshot 2024-07-21 at 4 53 56 PM" src="https://github.com/user-attachments/assets/8cca1aa9-1e51-462f-92f5-cf474d06f838">

You should see the same files as the picture above, one for each type of member, and 2 files for past events and upcoming events respectively, simply click on the one you want to add entities to,
for the sake of an example I will show you how to add a co-faculty member, so I will click on `cofacultymembers.tsx`:

<img width="605" alt="Screenshot 2024-07-21 at 5 29 14 PM" src="https://github.com/user-attachments/assets/5d08add9-1b43-400e-a97f-2475d184a103">

You can see already defined members, to add mine, I'll go to the most recent member lowest in the list and add it there after the comma:
<img width="479" alt="Screenshot 2024-07-21 at 5 34 14 PM" src="https://github.com/user-attachments/assets/a7c8ba05-ff3a-4839-9dc6-e0a02edd904a">

The format of the entities are a set of curly braces `{}` and make sure to put a comma after it to add another member if needed. All the entities must be **before** the square bracket `]` and curly bracket with semi-colon `};`
We can now fill it out with the fields and values. One recommendation to hasten the process would be to copy paste another entity and simply replace the values of the fields

<img width="384" alt="Screenshot 2024-07-21 at 5 37 44 PM" src="https://github.com/user-attachments/assets/03083d24-2f07-4810-b9e6-47626bac922d">

**IMPORTANT** <br>
For the image value, make sure to have the correct affiliation so that the picture renders properly, meaning:
if you are adding a co-faculty member, the image path must be `/coreTeam/<image>` where `<image>` is a .png/.jpeg etc. <br><br>
For Past/Upcoming Events: `/events/<image>`<br><br>
Academic Collaborators: `/academicCollaborators/<image>`<br><br>
Industrial Collaborators: `/IndustrialCollaborators/<image>`<br><br>
Alumni/Graduate Students/Post Doctorates: `students/<image>`<br><br>
***Step 2 will go over actually adding the image***<br><br>

We can finish off step 1 by clicking `Commit changes`, the green button most likely top right of your screen:

<img width="1173" alt="Screenshot 2024-07-21 at 5 51 29 PM" src="https://github.com/user-attachments/assets/bac84428-6cee-4b17-a1a5-71f51575ca8a">

And then one more time

<img width="378" alt="Screenshot 2024-07-21 at 5 52 56 PM" src="https://github.com/user-attachments/assets/81a09a1b-0b30-4bf3-a1b5-3854d861fbeb">

Step 1 is done, **please make sure to do step 2**

## STEP 2: Adding the member/event's picture
Navigate back to the [SustainSys Repository](https://github.com/sustainsys-ca/sustainsys-ca.github.io)
This time click on the `public` folder right under AllMembers

<img width="740" alt="Screenshot 2024-07-21 at 5 57 42 PM" src="https://github.com/user-attachments/assets/62246e8a-ef68-49fd-b4d5-5d2d8583cd6c">

From here you can choose what folder the picture should go into based on what type of entity you are adding:

<img width="1158" alt="Screenshot 2024-07-21 at 6 03 22 PM" src="https://github.com/user-attachments/assets/687786af-31c4-4560-96f8-7fe03cca6aa7">

Say I want to add an event, click on the events folder, and click on the `Add File` top-right, your use case will probably require you to upload a file, so click on that

<img width="1179" alt="Screenshot 2024-07-21 at 6 04 52 PM" src="https://github.com/user-attachments/assets/7121904a-0505-46bf-8ed4-960cd48d28cc">


At which point you can simply add the file and click on `Commit changes`
<img width="1103" alt="Screenshot 2024-07-21 at 6 05 52 PM" src="https://github.com/user-attachments/assets/7d0dc926-2bbc-4636-be46-5efcb0f100c6">

Congratulations! you have updated the SustainSys website.
