import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";

const UpdateUser = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({name,image},"kjdsvvvvvvvvjashuefu");
    await authClient.updateUser({
     name,
     image
})
  };
  return (
    <div>
      <Modal>
        <Button variant="secondary">
          {" "}
          <BiEdit></BiEdit> Update Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Contact Us</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="url">
                      <Label>image url</Label>
                      <Input placeholder="Enter your image url" />
                    </TextField>
                     <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close" type="submit">Save</Button>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
               
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateUser;
