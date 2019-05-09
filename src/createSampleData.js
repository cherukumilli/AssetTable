export default function createSampleData() {
  const data = [];
  for (let i = 0; i < 13; i++) {
    data.push({
      entityId: i,
      entityName: `ASSET ${i}`,
      entityType: `TYPE ${i}`,
      entityState: i % 3 ? `installing` : "online",
      alertCount: i * 3,
      highAlertCount: i,
      mediumAlertCount: i,
      lowAlertCount: i
    });
  }

  return data;
}
