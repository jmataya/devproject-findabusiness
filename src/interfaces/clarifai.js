type ClarifaiConcept = {
  id: string,
  name: string,
  value: number,
  app_id: string,
};

type ClarifaiOutput = {
  id: string,
  status: {
    code: number,
    description: string,
  },
  data: {
    concepts: Array<ClarifaiConcept>,
  },
};

type ClarifaiResult = {
  outputs: Array<ClarifaiOutput>,
};
