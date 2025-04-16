import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
// Updated ProfileCard Component
export function ProfileCard({
  name = "Avi Soclof",
  title = "Computer Science Student | Jerusalem College of Technology",
  profileImage = "images/IMG_2809_edited.jpg",
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
        </div>
      </CardBody>
    </Card>
  );
}
