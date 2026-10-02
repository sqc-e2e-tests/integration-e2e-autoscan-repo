// Rodeo module — clean follow-up for e2e autoscan PR test

function rodeoMain(eventName) {
  const normalizedName = String(eventName ?? 'rodeo').trim();
  return `Preparing ${normalizedName} schedule`;
}

module.exports = { rodeoMain };
