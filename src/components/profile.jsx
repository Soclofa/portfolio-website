import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
// Updated ProfileCard Component
export function ProfileCard({
  name = "Avi Soclof",
  title = "Computer Science Student",
  profileImage = "images/profile.jpg",
  school = "Jerusalem College of Technology",
}) {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader floated={false} className="h-80">
        <img
          src={profileImage}
          alt="profile-picture"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "center 50%" }}
        />
      </CardHeader>
      <CardBody className="text-center flex-grow flex flex-col justify-between">
        <div>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {title}
          </Typography>

          {/* School Icon and Name in One Row */}
          <div className="flex items-center justify-center mt-2">
            <img
              src="/images/school.svg" // Replace with the correct path to your school icon
              alt="school"
              className="h-5 w-5 mr-2"
            />
            <Typography color="blue-gray" className="font-medium">
              {school}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
