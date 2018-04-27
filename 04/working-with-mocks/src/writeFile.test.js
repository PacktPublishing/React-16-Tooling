import fs from 'fs';
import writeFile from './writeFile';

jest.mock('fs');

describe('writeFile', () => {
  it('calls fs.writeFile', done => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb(false);
    });

    writeFile('file.txt').then(() => {
      expect(fs.writeFile).toHaveBeenCalled();
      done();
    });
  });

  it('resolves without a value', done => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb(false, 'test');
    });

    writeFile('file.txt', test).then(() => {
      done();
    });
  });

  it('rejects on error', done => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb('failed');
    });

    writeFile().catch(err => {
      expect(err).toBe('failed');
      done();
    });
  });
});
